import { wilayas } from '../../constants/constants';
export const Details = ({data}) => {
  let level,status,commune,date;
  if (data.created) {
    date = data.created.substring(0,10);
  }
  if (data.category==="C") {
    level="College"
  }
  else if (data.category==="P") {
    level = "Primaire"
  }
  else {
    level = "Lycée"
  }
  if (data.modalite==="P") {
    status="Onsite"
  }
  else {
    status="Online"
  }
  if (data.commune) {
    commune = data.commune;
  }
  else {
    commune = wilayas[data.wilaya]
  }
  return (
    <div className='mx-12' style={{ fontFamily: 'Open Sans', display:'flex', flexDirection: 'column', alignContent:'flex-start', gap:8}}>
      <div className='md:text-start text-center' style={{fontWeight: 600, fontSize: 26, marginBottom: 8, paddingLeft: 5}}>Details</div>
      <div className="border border-gray-200 shadow-sm" style={{backgroundColor: 'white', borderRadius: 10, fontSize: 16, paddingLeft: 20, paddingTop: 3, paddingBottom: 3}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Title</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{data.name}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Module</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{data.module}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Level</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{level}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Status</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{status}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Price</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{data.price}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Date</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{date}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Wilaya</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{wilayas[data.wilaya]}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Commune</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{commune}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Address</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{data.appartment_address}</div>
        </div>
      </div>
    </div>
  )
}

