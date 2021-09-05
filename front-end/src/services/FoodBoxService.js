import axios from 'axios';

const FOODBOX_API_BASE_URL = "http://localhost:8092/api/menuitems";

class FoodBoxService {

    getMenuItems(){
        return axios.get(FOODBOX_API_BASE_URL);
    }

    createMenuItem(menuItem){
        return axios.post(FOODBOX_API_BASE_URL, menuItem);
    }

    getMenuItemById(menuItemId){
        return axios.get(FOODBOX_API_BASE_URL + '/' + menuItemId);
    }

    updateMenuItem(menuItem, menuItemId){
        return axios.put(FOODBOX_API_BASE_URL + '/' + menuItemId, menuItem);
    }

    deleteMenuItem(menuItemId){
        return axios.delete(FOODBOX_API_BASE_URL + '/' + menuItemId);
    }
}

export default new FoodBoxService()