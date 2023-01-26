import React from 'react'

export const Details = ({title, module, level, status, price, date, wilaya, commune, city, address}) => {
  return (
    <div className='mx-12' style={{ fontFamily: 'Open Sans', display:'flex', flexDirection: 'column', alignContent:'flex-start', gap:8}}>
      <div style={{fontWeight: 600, fontSize: 26, marginBottom: 8, textAlign:'start', paddingLeft: 5}}>Details</div>
      <div className="border border-gray-200 shadow-sm" style={{backgroundColor: 'white', borderRadius: 10, fontSize: 16, paddingLeft: 20, paddingTop: 3, paddingBottom: 3}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Title</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{title}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Module</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{module}</div>
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
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{price}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Date</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{date}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Wilaya</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{wilaya}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Commune</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{commune}</div>
        </div>
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>City</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{city}</div>
        </div>   
        <div style={{backgroundColor: '#8B8B8B', height: 1, marginRight: 20}}/>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', justifyItems:'start', height: 40}}>
          <div style={{gridRow: 1, gridColumn: 1, display:'flex', alignItems: 'center', marginLeft: 3}}>Address</div>
          <div style={{gridRow: 1, gridColumn: 2, display:'flex', alignItems: 'center'}}>{address}</div>
        </div>
      </div>
    </div>
  )
}

