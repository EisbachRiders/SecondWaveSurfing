import * as React from "react"

export default function Video({ url, title }) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        height: 0,
        background: "gray",
      }}
    >
      <iframe
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ISOsFnQxOyY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
