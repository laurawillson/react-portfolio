import React from 'react';
import { GoLinkExternal } from 'react-icons/go';

export default function ThumbnailLinkComponent({
    project_title,
    hashtags,
    image_path,
    href_link,
    overlay_text
}){
    return(
        <div className="p-10 min-w-[72rem] max-w-[72rem] m-auto">
            <div className="border-t-2 border-slate-400">
                <div className="mt-2 font-normal text-xl">
                    {project_title}
                </div>
                <div className="flex flex-row mb-4">
                    {
                        hashtags !=undefined && hashtags.length > 0 ?
                        hashtags.map((hashtag_name,index)=>{
                            hashtag_name = "#" + hashtag_name
                            return(
                                <div key={index} className="mr-2 font-semibold text-gray-500 text-sm">
                                    {hashtag_name}
                                </div>
                            )
                        })
                        :
                        null
                    }
                </div>
                <div className="group relative bg-white rounded-md">
                    <a href={href_link} target="_blank">
                        <img className="w-full object-contain w-full max-h-[500px] rounded-md"
                            src={image_path} 
                        />
                        <div className="absolute top-5 right-5 group-hover:opacity-100">
                            <GoLinkExternal/>
                        </div>
                        <div
                            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-pink-200 opacity-0 group-hover:opacity-50 duration-500">
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  opacity-0 group-hover:opacity-100 duration-500">
                            <h1 className="text-2xl text-slate-700 group-hover:opacity-100 p-5 rounded-full bg-white flex justify-center items-center">
                                {overlay_text}
                            </h1>
                        </div>
                    </a>

                </div>

            </div>


        </div>
 
    )

}