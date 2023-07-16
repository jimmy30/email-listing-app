import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { addIdEmails } from '../utils/helper.js'

import Header from '../components/Layout/Header';
import EmailList from '../components/EmailList/EmailList';
import data from '../data/data.json';

const Drawer = createDrawerNavigator();


const DEFAULT_FOLDERS_LIST = [
  {
    name:'Inbox',
    folder_key:'inbox',
    iconName:'inbox'
  },
  {
       name:'Sent',
       folder_key:'sent',
       iconName:'send-o'
   },
   {
       name:'Draft',
       folder_key:'draft',
       iconName:'file-text'
   },
   {
       name:'Archived',
       folder_key:'archieved',
       iconName:'archive'
   }
];

const MailBox = () => {
  
  const [emailList, setEmails] = useState(addIdEmails(data));
  const [folderInboxEmailList, setFolderInboxEmailList] = useState([]);
  const [folderSentEmailList, setFolderSentEmailList] = useState([]);
  const [folderDraftEmailList, setFolderDraftEmailList] = useState([]);
  const [folderArchivedEmailList, setFolderArchivedEmailList] = useState([]);
  const [activeFolder, setActiveFolder] = useState('inbox');

  useEffect(() => {
    setFolderInboxEmailList(filterFolderEmailList('inbox'))
    setFolderSentEmailList(filterFolderEmailList('sent'))
    setFolderDraftEmailList(filterFolderEmailList('draft'))
    setFolderArchivedEmailList(filterFolderEmailList('archived'))
  }, [emailList])

  const filterFolderEmailList = (activeFolder) => {
    
    const filterEmail = emailList.filter((item)=>{
      return item.folder_key == activeFolder
    })
    
    return filterEmail
  }

  const handleOnInoxImportant = (id) => {
    
    const list = emailList
    const index = emailList.findIndex(email => email.id === id);
    list[index].is_important = !list[index].is_important
    setEmails(list)
    setFolderInboxEmailList(filterFolderEmailList('inbox'))
  };
  const handleOnSentImportant = (id) => {
    
    const list = emailList
    const index = emailList.findIndex(email => email.id === id);
    list[index].is_important = !list[index].is_important
    setEmails(list)
    setFolderSentEmailList(filterFolderEmailList('sent'))
  };
  const handleOnDraftImportant = (id) => {
    
    const list = emailList
    const index = emailList.findIndex(email => email.id === id);
    list[index].is_important = !list[index].is_important
    setEmails(list)
    setFolderDraftEmailList(filterFolderEmailList('draft'))
  
  };
  
  const handleOnArchivedImportant = (id) => {
    
    const list = emailList
    const index = emailList.findIndex(email => email.id === id);
    list[index].is_important = !list[index].is_important
    setEmails(list)
    setFolderArchivedEmailList(filterFolderEmailList('archived'))

  };
  


  return (
    <SafeAreaView style={{flex: 1}}>
    
    <NavigationContainer>
    <Drawer.Navigator
       drawerType="front"
       initialRouteName="Inbox"
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}
    >
    {
         DEFAULT_FOLDERS_LIST.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{
drawerIcon:({focused})=>
 <Icon name={drawer.iconName} size={18} color="#f7c200" />


}}

           
           component={() => 
             
             drawer.folder_key==='inbox' ? <EmailList emailList={folderInboxEmailList} 
           handleOnImportant={handleOnInoxImportant}/>
               : drawer.folder_key==='sent' ? <EmailList emailList={folderSentEmailList} 
             handleOnImportant={handleOnSentImportant}/>
                 : drawer.folder_key==='draft' ? <EmailList emailList={folderDraftEmailList} 
               handleOnImportant={handleOnDraftImportant}/>
                   : <EmailList emailList={folderArchivedEmailList} 
                 handleOnImportant={handleOnArchivedImportant}/>
                   
             
         
         }
           
  

    />)
       }
    </Drawer.Navigator>
    </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default MailBox

