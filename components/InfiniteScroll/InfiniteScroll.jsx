/* eslint-disable no-undef */
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from './Loader';
import { useMutationObservable } from './hooks/useMutationObserver';

const InfiniteScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: none;
  overflow-y: auto;
`;

const InfiniteScrollBase = (
  { children, reverse = false, onScrollEnd = () => {}, loading },
  ref,
) => {
  const [scrollHeight, setScrollHeight] = useState();
  const [dispatchObserverEvent, setDispatchObserverEvent] = useState(false);
  const wrapperRef = useRef();
  const triggerRef = useRef();

  const handleObserver = ([target]) => {
    if (target.isIntersecting && target.intersectionRatio) {
      setDispatchObserverEvent(true);
    }
  };

  const handleMutations = useCallback((mutations) => {
    if (mutations?.length > 1) {
      const wrapperEl = wrapperRef.current;
      setScrollHeight((state) => wrapperEl.scrollHeight - state);
    }
  }, []);

  if (reverse) {
    useMutationObservable({
      targetEl: wrapperRef.current,
      callback: handleMutations,
    });
  }

  const handleScrollToStart = useCallback(() => {
    setScrollHeight(wrapperRef?.current?.scrollHeight);
  }, []);

  useImperativeHandle(ref, () => ({
    scrollToStart: handleScrollToStart,
  }));

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const triggerEl = triggerRef.current;

    const intersectionObserver = new IntersectionObserver(handleObserver, {
      root: wrapperEl,
      threshold: 1,
    });
    intersectionObserver.observe(triggerEl);

    if (reverse) {
      setScrollHeight(wrapperEl.scrollHeight);
    }

    return () => {
      intersectionObserver.unobserve(triggerEl);
    };
  }, []);

  useEffect(() => {
    if (reverse) {
      InfiniteScrollBase.handleScrollPosition(wrapperRef.current, scrollHeight);
    }
  }, [scrollHeight]);

  useEffect(() => {
    if (dispatchObserverEvent) {
      onScrollEnd();
      setDispatchObserverEvent(false);
    }
  }, [dispatchObserverEvent]);

  if (reverse) {
    return (
      <InfiniteScrollWrapper ref={wrapperRef}>
        {loading && <Loader />}
        <span ref={triggerRef} />
        {children}
      </InfiniteScrollWrapper>
    );
  }

  return (
    <InfiniteScrollWrapper ref={wrapperRef}>
      {children}
      <span ref={triggerRef} />
      {loading && <Loader />}
    </InfiniteScrollWrapper>
  );
};

const InfiniteScroll = forwardRef(InfiniteScrollBase);

InfiniteScroll.handleScrollPosition = (element, height) => {
  element.scrollTo({ top: height, behavior: 'instant' });
};

InfiniteScroll.propTypes = {
  children: PropTypes.element.isRequired,
  reverse: PropTypes.bool,
  onScrollEnd: PropTypes.func,
};

export default InfiniteScroll;
