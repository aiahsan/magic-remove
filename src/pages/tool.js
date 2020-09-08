import React from 'react'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'

const myTheme = {
    // Theme object to extends default dark theme.
  };
   
export default () => 
{

   return <ImageEditor
includeUI={{
  loadImage: {
    path: 'img/sampleImage.jpg',
    name: 'SampleImage'
  },
  theme: myTheme,
  menu: ['shape', 'filter','crop','flip','rotate','draw','icon','text','mask'],
  initMenu: 'filter',
  uiSize: {
    width: '1000px',
    height: '700px'
  },
  menuBarPosition: 'bottom'
}}
cssMaxHeight={500}
cssMaxWidth={700}
selectionStyle={{
  cornerSize: 20,
  rotatingPointOffset: 70
}}
usageStatistics={true}
/>

}
    