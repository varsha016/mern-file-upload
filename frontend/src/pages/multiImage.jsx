import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function MultiImage() {
    const [data, setData] = useState()
    const [name, setName] = useState("kate")
    const [documents, setDocuments] = useState()
    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()

        //    for loop mins work as for of loop

        // for (let x of fd.entries()) {
        //     console.log(x);
        // }

        fd.append("name", name)
        for (const d of documents) {
            fd.append("doc", d)
        }

        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);

    }
    const getAllUsers = async () => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setData(result)

    }
    useEffect(() => {
        getAllUsers()


    }, [])

    return <>
        <pre>
            {/* {JSON.stringify(name)} */}
            {/* {JSON.stringify(documents, null, 2)} */}

        </pre>
        <div className="container mt-5" >
            <div className="row">
                <div className="col-sm-6 offset-3">


                    <form onSubmit={handleSubmit}>

                        <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control mt-4'
                            placeholder='Enter Name' />
                        <br />
                        <input type="file" multiple onChange={e => setDocuments(e.target.files)} className='form-control mt-4'
                            placeholder='Enter File' />
                        <button type="submit" className="btn btn-primary mt-4">Primary</button>
                    </form>
                </div>
            </div>
        </div>



        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    {data && data.map((item, i) => <div className="card mt-4 " key={i}>
                        <div className="card-body d-flex justify-content-space-between gap-4">
                            <h1>{item.name}</h1>
                            {
                                item.docs.map((url, i) => <div key={i} >

                                    <img src={`http://localhost:5000/${url}`} alt="img" width={100} height={100} className="img-fluid mt-3" />
                                </div>)
                            }


                        </div>
                    </div>)}
                </div>
            </div>
        </div>



    </>
}
