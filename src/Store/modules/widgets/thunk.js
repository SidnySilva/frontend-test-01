import {createWidget,deleteWidget,getWidget,updateWidget} from './actions'
import fakeDB from '../../../Styles/utils/fakeDB';


export const createWidgetThunk =(data) => (dispatch) =>{
    console.log(data)
    console.log(fakeDB)
};
export const deleteWidgetThunk =(id) => (dispatch) =>{};
export const getWidgetThunk =() => (dispatch) =>{

};
export const updateWidgetThunk =(data) => (dispatch) =>{};