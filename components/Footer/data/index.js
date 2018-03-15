import Candidates from './candidates';
import Companies from './companies';
import Courses from './courses';
import Institutional from './institutional';
import Stamps from './stamps';

const Data = {
  theme: {
    primaryColor: '#005da4',
    secondaryColor: '#666666',
    borderColor: '#e3e3e3',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial',
    fontSize: '12px',
    paddingTop: '15px',
    paddingBottom: '10px',
    StampsHolderPadding: '10px',
  },
  candidates: Candidates,
  companies: Companies,
  courses: Courses,
  institutional: Institutional,
  stamps: Stamps,
};

export default Data;
