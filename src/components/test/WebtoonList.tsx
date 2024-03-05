import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WebtoonList = () => {
    return (
        <div className="w-full">
            <div id="body" className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4">
                {Array.from(Array(12).keys()).map((d) => {
                    return (
                        <SkeletonTheme key={d} baseColor="#202020" highlightColor="#232323">
                            <div className="flex flex-col">
                                <Skeleton className="w-[400px] h-[260px]" />
                                <Skeleton className="w-[300px] h-[17px] mt-4" />
                                <Skeleton width={'120px'} className="h-[12px] mt-1" />
                            </div>
                        </SkeletonTheme>
                    );
                })}
            </div>
        </div>
    );
};

export default WebtoonList;
