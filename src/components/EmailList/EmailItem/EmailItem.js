import React, {useState, useEffect}from 'react';
// import { FaBookmark, FaRegBookmark, FaRedoAlt, FaPaperclip } from 'react-icons/fa';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {limitString} from '../../../utils/helper.js'

import { EmailItemStyles } from './EmailItemStyles'


const EmailItem = ({id, folder_key,from, to, subject, is_read, is_important, has_attachment, handleOnImportant}, key) => {

    return (
        <View style={is_read?EmailItemStyles.emailRowIsRead:EmailItemStyles.emailRow}>
            <View style={EmailItemStyles.emailRowImportant}>
            <TouchableOpacity onPress={()=>handleOnImportant(id)} activeOpacity={.85}>

              <View>
                  {
                    is_important?
                    <Icon name="bookmark" size={18} color="#f7c200" />
                    :
                    <Icon name="bookmark-o" size={18} color="#f7c200" />
                  }
              </View>
              </TouchableOpacity>
              
              <Text style={is_read?EmailItemStyles.fromTextIsRead:EmailItemStyles.fromText}>{limitString(from, 30)}</Text>
            </View>
            <View>
              <Text style={is_read?EmailItemStyles.fromTextIsRead:EmailItemStyles.text}>{limitString(to, 40)}</Text>
            </View>
            <View>
                <Text style={is_read?EmailItemStyles.textIsRead:EmailItemStyles.text}>
                {limitString(subject, 40)}
                </Text>
            </View>
            {has_attachment &&
            <View style={EmailItemStyles.attachment}>
              <Icon name="paperclip" size={18} />
            </View>
          }

        </View>
    )
}
export default EmailItem;