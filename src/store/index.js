import  {create} from 'zustand'

const useMacbookStore   = create((set)=> ({
    color: '#2e2c2e',
    setColor: (color) => set({color}),


    scale: 0.88,
    setScale: (scale) => set({scale}),

    reset: () => set({ color: '#2e2c3e', scale: 0.08}),
}))

export default useMacbookStore