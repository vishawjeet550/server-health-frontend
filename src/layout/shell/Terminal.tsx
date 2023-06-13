import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paragraph from "../../common/semantic_tags/Paragraph"
import ShellCommand from "./ShellCommand"
import { runCommand } from "../../api/shell/shell.api";
import { addNewLineIntoShell } from "../../store/reducers/shell";
import { RootState } from "../../store";

const Terminal = () => {
  const dispatch = useDispatch();
  const { shell, currentDir } = useSelector((state: RootState) => state.shell)

  const runCmd = (cmd = "") => dispatch(runCommand({ cmd }) as any);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, val: string) => {
    e.preventDefault();
    await runCmd(val)
    dispatch(addNewLineIntoShell({ input: '', output: '', error: '', currentDir: currentDir }))
  }

  useEffect(() => {
    dispatch(addNewLineIntoShell({ input: '', output: '', error: '', currentDir: 'server-health' }))
  }, [])

  return (
    <div className="h-screen w-full bg-gray-800 rounded-lg ovrflow-y-scoll text-white p-4">
        <Paragraph className="font-bold">Welcome back, type whoami to know your identity...</Paragraph>
        {
            shell.map((sh, key) => {
                return <ShellCommand path={sh.currentDir} key={key} input={sh.input} output={sh.output} submitHandler={handleSubmit} />
            })
        }
    </div>
  )
}

export default Terminal