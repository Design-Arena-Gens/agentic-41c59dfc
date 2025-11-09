import LogoWordmark from './LogoWordmark'

export default function CanMockup(){
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="can" aria-label="TwistUp can mockup">
        <div className="canTop" />
        <div className="capRing" />
        <div className="capHint">twist to release</div>
        <div className="canLabel">
          <LogoWordmark variant="dark" />
        </div>
        <div className="fizz" />
      </div>
    </div>
  )
}
