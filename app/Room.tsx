"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap } from "@liveblocks/client";
import Loader  from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_LuNG-hH5gimShvw2MYdM8XK8X-gHfDq-ojMP4VHGxH_J50dsg9dxLuxVjjiwkpZi"}>
      <RoomProvider id="my-room"  initialPresence={{ cursor: null, cursorColor: null, editingText: null }}
      initialStorage={{
        canvasObjects: new LiveMap(),
      }}>
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}