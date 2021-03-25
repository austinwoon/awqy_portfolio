import {v4 as uuidv4} from "uuid";

export const getUuid = (arr) : Array<Object> => {
    if (!(arr[0] instanceof Object)) {
        return arr.map(item => ({uuid: uuidv4(), item: item}))
    }
    return arr.map(item => ({
        uuid: uuidv4(),
        ...item
    }))
}