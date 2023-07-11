import React from 'react'

const ReactContext = React.createContext({
  condition: true,
  savedVideos: [],
  activeTab: '',
  changeValue: () => {},
  changeFunction: () => {},
  changeState: () => {},
})

export default ReactContext
