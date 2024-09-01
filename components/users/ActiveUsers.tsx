import { useOthers, useSelf } from "@liveblocks/react";
import { Avatar } from "./Avatar";
import styles from './index.module.css'
import { useMemo } from "react";

const ActiveUsers=()=> {
 
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    const memoizedUsers=useMemo(()=>{
      return(
      <div className="flex items-center justify-center gap-1  py-2">
        <div className="flex pl-3">
          {users.slice(0, 3).map(({ connectionId }) => {
            return (
              <Avatar key={connectionId} otherStyles="-ml-3" />
            );
          })}
  
          {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}
  
          {currentUser && (
            <div className="relative ml-8 first:ml-0">
              <Avatar />
            </div>
          )}
        </div>
      </div>
    )
    },[users.length])
  
    return memoizedUsers;
  }

  export default ActiveUsers