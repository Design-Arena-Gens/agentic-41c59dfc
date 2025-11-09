const SWATCHES = [
  { name: 'Off?White', hex: '#F7F7F3', var:'--tw-offwhite', text:'#1E2227' },
  { name: 'Charcoal', hex: '#1E2227', var:'--tw-charcoal', text:'#F7F7F3' },
  { name: 'Mint Aqua', hex: '#2ED8C3', var:'--tw-mint', text:'#0F1115' },
  { name: 'Tangerine', hex: '#FF7A1C', var:'--tw-tangerine', text:'#0F1115' },
]

export default function Palette(){
  return (
    <div className="paletteGrid">
      {SWATCHES.map((s)=> (
        <div className="swatch" key={s.name}>
          <div className="swatchChip" style={{background:s.hex}} />
          <div className="swatchMeta">
            <b>{s.name}</b>
            <code style={{color:'#6A7078'}}>{s.hex}</code>
          </div>
        </div>
      ))}
    </div>
  )
}
