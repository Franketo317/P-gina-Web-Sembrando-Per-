/// <reference types="vite/client" />

declare module '*.jpg' {
  const content: string
  export default content
}

// 🟢 Esto le enseña a TypeScript a reconocer extensiones en mayúsculas (.JPG)
declare module '*.JPG' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.PNG' {
  const content: string
  export default content
}