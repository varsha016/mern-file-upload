import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MultiDocs() {
    const [dob, setDob] = useState()
    const [adhar, setAdhar] = useState()
    const [tc, setTc] = useState()

    const [doc, setDoc] = useState()
    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", dob)
        fd.append("adhar", adhar)
        fd.append("tc", tc)
        const { data } = await userInstance.post("doc/add", fd)
        console.log(data);
    }
    const getAllDocs = async () => {
        const { data } = await userInstance.get("/doc")
        console.log(data.result);
        setDoc(data.result)
    }
    // for (const d of documents) {
    //     fd.append("doc", d)
    // }
    useEffect(() => {
        getAllDocs()
    }, [])

    return <>
        <pre>{JSON.stringify(doc, null, 2)}</pre>


        <div className="container mt-5" >
            <div className="row">
                <div className="col-sm-6 offset-3">


                    <form onSubmit={handleSubmit}>

                        <input type="file" onChange={e => setDob(e.target.files[0])} className='form-control mt-4'
                            placeholder='Enter Name' />
                        <br />
                        <input type="file" onChange={e => setAdhar(e.target.files[0])} className='form-control mt-4'
                            placeholder='Enter File' />
                        <br />
                        <input type="file" onChange={e => setTc(e.target.files[0])} className='form-control mt-4'
                            placeholder='Enter File' />
                        <button type="submit" className="btn btn-primary mt-4">Add  MultiDoc</button>
                    </form>
                </div>
            </div>
        </div>
        {doc && doc.map(item => <>
            {/* <h1>{JSON.stringify(item.userDob)}</h1> */}

            <img src={`http://localhost:5000/${item.userDob}`} alt="" width={100} height={100} className="img-fluid mt-3" />
            <img src={`http://localhost:5000/${item.userAdhar}`} alt="" width={100} height={100} className="img-fluid mt-3" />
            <img src={`http://localhost:5000/${item.userTc}`} alt="" width={100} height={100} className="img-fluid mt-3" />


        </>)}

    </>




}
