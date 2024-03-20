import React from 'react'

export default function Bt3() {
    const danhlam = [
        ["nt", "Biển Nha Trang", "https://i1-dulich.vnecdn.net/2022/05/09/shutterstock-280926449-6744-15-3483-9174-1652070682.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bGCo6Rv6DseMDE_07TT1Aw"],
        ["dl", "Thành phố Đà Lạt", "https://exbeerience.vn/wp-content/uploads/2020/02/%C4%91%C3%A0.jpg"],
        ["hl", "Vịnh Hạ Long", "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-5.jpg?tr=dpr-2,w-675"],
        ["pt", "Biển Phan Thiết", "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/bai-rang-mui-ne.jpg"],
        ["pq", "Đảo Phú Quốc", "https://vcdn1-dulich.vnecdn.net/2022/04/08/dulichPhuQuoc-1649392573-9234-1649405369.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=SU6n3IvJxW1Sla0xqg31Kg"]
    ];
    const showImage = (imageUrl) => {  
        console.log('Image URL:', imageUrl);
    };
  return (
    <form id="form" method="post" action="" >
        <table style={{backgroundColor: '#cdcb98', marginLeft:'auto', marginRight: 'auto', width: '50%'}}>
            <tr>
                <th colspan="2" style={{ height: '50px', backgroundColor: '#727139', textAlign: 'center', fontSize: '20px', color:'white'}}>
                    <a id='start' style={{textDecoration: 'none'}}>DANH LAM THẮNG CẢNH</a>
                </th>
            </tr>
            <tr style={{display: 'flex'}}>
                <th style={{display: 'inline-flex', height:'fit-content'}}>
                    <div style={{backgroundColor: 'white', width: '350px', paddingLeft:'10px'}}>
                        <p>Danh sách địa danh</p>
                        <p>
                            {danhlam.map((dl, index) => (
                                // <a key={index} href='javascript:void(0)' onClick={() => showImage(dl[2])}>
                                //     <p>{dl[1]}</p>
                                // </a>
                                <a key={index}  href={`#${encodeURIComponent(dl[1])}`} onClick={() => showImage(dl[2])} >
                                    <p>{dl[1]}</p>
                                </a>
                            ))}
                        </p>
                    </div> 
                </th>
                <th style={{display: 'inline-flex'}}>
                    <div style={{backgroundColor: 'white', width: '350px', textAlign: 'center'}}>
                        {danhlam.map((dl, index) => (
                            <div key={index} id={dl[1]}>
                                <h3>{dl[1]}</h3>
                                <img style={{width: '300px', height: '200px'}} src={dl[2]} alt={dl[1]} />
                                <a href='#start'><p style={{fontSize: '15px', textDecoration: 'none'}}>Quay lại đầu trang</p></a>
                            </div>))}
                    </div>  
                </th>
            </tr>
        </table>
    </form>
  )
}
