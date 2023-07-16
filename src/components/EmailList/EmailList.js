import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

import EmailItem from './EmailItem/EmailItem';
import { EmailListStyle } from './EmailListStyle'

const EmailList = ({emailList, handleOnImportant}) => {

    return (
      <ScrollView style={{flex: 1}}>
        <View style={EmailListStyle.emailList}>
        
        <FlatList
                          keyExtractor={(item, index) => index}
                          data={emailList}
                          onEndReachedThreshold={0.3}
                          maxToRenderPerBatch={6}
                          windowSize={6}
                          style={{ width: "100%", flex: 1,marginBottom:80}}
                          // refreshing={this.state.refreshing}
                          // onRefresh={this.getData}
                          renderItem={({item}) =>  
                            <EmailItem
                                        id={item.id}
                                        key={item.key}
                                        folder_key={item.folder_key}
                                        from={item.from}
                                        to={item.to}
                                        subject={item.subject}
                                        is_read={item.is_read}
                                        is_important={item.is_important}
                                        has_attachment={item.has_attachment}
                                        handleOnImportant={handleOnImportant}
                                />
                       }  
                      />
                      

        </View>
      </ScrollView>
    )
}
export default EmailList