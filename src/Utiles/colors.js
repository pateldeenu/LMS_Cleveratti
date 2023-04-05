// import { useDispatch, useSelector } from "react-redux";
// const { colorrdata } = useSelector(state => state.commonReducer) || {colorrdata};
 import colorrdata from '../Utiles/Colordataset';

export const color = {
  theme_backgound : colorrdata,
};
export default color;


export const profileShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
};
