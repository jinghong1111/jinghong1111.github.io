# jinghong1111.github.io
My code repository for my website [to be updated on a monthly basis] 


## Project is created with ReactJS w/ TypeScript + SWC, vite and TailwindCSS 

## installations 

## ALWAYS, ALWAYS USE: npm install --legacy-peer-deps, since we are USING legacy components that allows for 3D animations. 

1. npm create vite@latest ./ -- -- template react  # select react, typescript + SWC 

2. npm install -D tailwindcss@latest 
  npx tailwindcss init  

3. npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom # install dependencies for 3D, tilt, timeline, emailjs and framer-motion 

4. potential error could arise from type script package problem: install JavaScript and TypeScript Nightly on VSCODE to fix this 

5. More potential errors from Computers.jsx, arising from the imports of Canvas from react-three-fiber and OrbitControls from @react-three/drei:
  SOLVE: npm install --legacy-peer-deps three @types/three @react-three/fiber @react-three/drei 
