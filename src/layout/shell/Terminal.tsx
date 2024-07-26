import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paragraph from "../../common/semantic_tags/Paragraph"
import ShellCommand from "./ShellCommand"
import { RootState } from "../../store";
import { addNewLineIntoShell, clearShell, updateHistoryAndDirectory, updateShellOutput } from "../../store/reducers/shell";
import Heading4 from "../../common/semantic_tags/Heading4";
import useSocket from "../../hooks/useSocket";

const Terminal = () => {
  const dispatch = useDispatch();
  const socket = useSocket('http://localhost:8000/shell');
  const { shell } = useSelector((state: RootState) => state.shell)

  const updateShellOuputs = (terminalId: number, output: string) => {
    if (terminalId !== -1) {
      const updatedShellDetails = shell.map((item, index) => {
        if (index === terminalId) {
          return { ...item, output: item.output + output };
        }
        return item;
      });
      return updatedShellDetails
    }
    return shell
  }

  const updateExecutions = (payload: any) => {
    const { terminalId, ...rest } = payload;
      if (terminalId !== -1) {
        let newShell = [...shell];
        newShell[terminalId] = { ...newShell[terminalId], ...rest };
        return newShell
      }
      return shell
  }

  useEffect(() => {
    if (socket) {
      socket.on('shellResponse', (data: any) => {
        if (data?.listening && data?.success) {
          dispatch(updateShellOutput({ shell: updateExecutions({ terminalId: data?.terminalId, executed: true, currentDir: data?.currentDir, output: data?.output }) }))
          dispatch(addNewLineIntoShell({ error: data?.error || '', output: '', input: '', currentDir: data?.currentDir || 'Root', executed: false }))
          return
        }
        if(data?.listening){
          dispatch(updateShellOutput({ shell: updateShellOuputs(data?.terminalId, data?.output) }))
        }
        if (data?.success) {
          dispatch(updateShellOutput({ shell: updateExecutions({ terminalId: data?.terminalId, executed: true, currentDir: data?.currentDir }) }))
          dispatch(addNewLineIntoShell({ error: data?.error || '', output: '', input: '', currentDir: data?.currentDir || 'Root', executed: false }))
        }
      });
      socket.on('currentShellDetails', (data: any) => {
        dispatch(updateHistoryAndDirectory({ history: data.history, currentDir: data.path }))
        dispatch(addNewLineIntoShell({ error: '', output: '', input: '', currentDir: data.path || 'Root', executed: false }))
      })
    }

    return () => {
      if (socket) {
        socket.off('shellResponse');
      }
    };
  }, [socket, shell]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, val: string) => {
    e.preventDefault();
    if (val === 'clear') {
      return dispatch(clearShell())
    }
    socket?.emit('shell', { cmd: val, terminalId: shell.length - 1 })
  }

  return (
    <div className="h-[90vh] w-full !bg-[#2B2B2B] rounded-lg overflow-y-scroll text-white p-4">
      <Heading4 className="text-4xl font-bold opacity-40">welcome back</Heading4>
      <Paragraph className="font-bold mb-4 opacity-40">type whoami to know your identity...</Paragraph>
      {
        shell.map((sh, key) => {
          return <ShellCommand executed={sh.executed} path={sh?.currentDir || ''} key={key} input={sh.input} output={sh.output} submitHandler={handleSubmit} />
        })
      }
    </div>
  )
}

export default Terminal