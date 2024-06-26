import React from 'react'
import Cards from '../../components/Cards'
import CanvasJSReact from '../../canvasjs.react';
import { useGetAlumniDataQuery } from '../../services/alumniApi';

function Dashboard() {
    const {
        data: alumniCount
    } = useGetAlumniDataQuery({
        url: 'alumni',
        tab: 'tab1'
    })

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const employmentType = {
        backgroundColor: "white",
        title: {
            text: "Employment Type"
        },
        height: 360,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Full Time",  y: alumniCount?.data?.full_time  },
                { label: "Part Time", y: alumniCount?.data?.part_time  },
                { label: "Freelancer", y: alumniCount?.data?.freelancer  }
            ]
        }
        ]
    }

    const employmentStatus = {
        backgroundColor: "white",
        title: {
            text: "Employment Status"
        },
        height: 200,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
                { label: "Employed",  y: alumniCount?.data?.employed  },
                { label: "Unemployed", y: alumniCount?.data?.unemployed  }
            ]
        }
        ]
    }

    const jobRelated = {
        backgroundColor: "white",
        title: {
            text: "Job Related"
        },
        height: 200,
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
                { label: "Related",  y: alumniCount?.data?.related },
                { label: "Not Related", y: alumniCount?.data?.not_related  }
            ]
        }
        ]
    }
    return (
        <div className='grid place-items-center sm:h-full '>
            <div className='flex gap-5 justify-center items-center mt-10 sm:grid md:grid'>
                <Cards 
                    bgColor='green'
                    title="Total"
                    count={alumniCount?.data?.total_students}
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(1).png?alt=media&token=8a4ff95b-cc9b-47df-a1ce-668e26eb0800"
                />
                <Cards 
                    bgColor='blue'
                    title="Male"
                    count={alumniCount?.data?.male}
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=3b8c50c3-dcd2-4527-a67d-b5b265f42d7b"
                />
                <Cards 
                    bgColor='red'
                    title="Female"
                    count={alumniCount?.data?.female}
                    imageLogo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(4).png?alt=media&token=db636ea7-166d-4954-8b1d-d4375de3ab5e"
                />
            </div>
            <div className='flex w-full justify-center items-center mt-5 gap-5 py-10 sm:grid md:grid'>
                <div className='h-full w-[60%] sm:w-full sm:h-96'>
                    <CanvasJSChart options = {employmentType} />
                </div>
                <div className='grid h-full w-52 gap-5'>
                    <div className='border-2 rounded-xl h-52'>
                    <CanvasJSChart options = {employmentStatus} />
                    </div>
                    <div className='border-2 rounded-xl h-52 w-60'>
                    <CanvasJSChart options = {jobRelated} />
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default Dashboard