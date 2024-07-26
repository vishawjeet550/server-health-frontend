import React, { ComponentType, useEffect, useState } from "react"

import useSocket from "../hooks/useSocket";
import Heading2 from "../common/semantic_tags/Heading2";
import Directories from "../common/Directories";

interface IWithCodeEditor {

}

function withCodeEditor<P extends object>(
  WrappedComponent: ComponentType
): React.FC<P & IWithCodeEditor> {
  const WithEditor: React.FC<P & IWithCodeEditor> = (props) => {
    const socket = useSocket('http://localhost:8000/code');
    const query = new URLSearchParams(window.location.search);
    const [directories, setDirectories] = useState([])
    const paths = query.get('path')?.split('/') || []
    const pathName = paths?.length > 0 ? paths[paths?.length - 1] : 'Unknown Directory'
    useEffect(() => {
      console.log('coming', query.get('path'))
      if (query.get('path')) {
        socket?.on('currentDirectories', (data: any) => {
          console.log('coming in current', data)
          if (data.success) {
            setDirectories(data.directories.map((i: any) => { return { ...i, open: false, subdirectories: [] } }))
          }
        })
        socket?.emit('getCurrentDirectory', { path: query.get('path') })
      }
      return () => {
        if (socket) {
          socket.off('shellResponse');
        }
      };
    }, [socket])

    const handleDirectory = (val: string) => {
      const allDirectories: any = directories
      const pathOfArray = val.split(',') || []
      if (pathOfArray.length > 0) {
        allDirectories[Number(pathOfArray[0])]['open'] = !allDirectories[Number(pathOfArray[0])]['open']
        setDirectories(allDirectories)
      }
    }

    console.log('coming in logs', directories)

    return (
      <div className="with-code-editor-wrapper flex w-screen h-screen overflow-scroll gap-2">
        <div className="left-sidebar flex-none w-[300px] p-8 black-gradient rounded-lg">
          <div className="editor-sidebar-header">
            <Heading2 className="border-b-2 text-white font-bold text-2xl border-grey-900 mb-6">{pathName}</Heading2>
          </div>
          <div className="directories text-white opacity-70">
            <Directories directories={directories} handleDirectory={handleDirectory} />
          </div>
        </div>
        <div className="wrapped-component flex-1">
          <WrappedComponent />
        </div>
      </div>
    )
  }
  return WithEditor;
}

export default withCodeEditor