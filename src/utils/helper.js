import uuid from 'react-native-uuid';

export const addIdEmails = (array) => {
    return array.map((item)=>({id: uuid.v4() ,...item}))
}

export const limitString = (str, limit) => {
    
  if(str.length > limit)
  {
    return str.substring(0, limit)+'...'
  }
  return str
}