declare module '*.module.less' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
