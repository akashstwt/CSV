import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard_page = () => {
    return (
        <div className='h-[545px]' >
            <div className='flex flex-col ' >
                <div className=' h-18'>
                    <div className=' h-16 flex justify-around p-2'>
                        <Link to = "/page0">
                            <button className=" bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded relative ">
                                Let start
                            </button>
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <div className='h-[480px] bg-white w-[80%]'>
                        CSV data visualization tools are indispensable assets for modern data analytics, 
                        simplifying the interpretation and analysis of CSV (Comma-Separated Values) data—a prevalent format for storing tabular data. 
                        These tools empower users to transform raw CSV datasets into meaningful visual representations, facilitating insights and actionable conclusions. 
                        They offer features like data importation, manipulation, and visualization, streamlining the process of working with CSV data. 
                        With intuitive interfaces, users can navigate large datasets efficiently, performing tasks such as cleaning, filtering, and aggregating to prepare data for visualization.
                        Moreover, these tools provide a diverse range of visualization options, including interactive charts, graphs, heatmaps, and dashboards, enabling users to explore and analyze data comprehensively. 
                        By visualizing CSV data, users can identify trends, outliers, and correlations, leading to valuable insights for informed decision-making. 
                        Additionally, CSV data visualization tools offer advanced analytics capabilities, leveraging machine learning algorithms and statistical techniques to uncover hidden patterns, predict future trends, and perform complex analyses. 
                        Integration with other data sources further enhances analytical capabilities, enabling comprehensive analysis across various data types.
                        In summary, CSV data visualization tools are essential for organizations to derive actionable insights from their CSV datasets, driving innovation and competitive advantage in today's data-driven world.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard_page