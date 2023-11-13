import React from "react"

type Props = {
    data: any,
    render: React.ReactElement,
}

export default function RemoteData({data, render}: Props){
  if(!data) return <p>loading</p>
  return render;
}