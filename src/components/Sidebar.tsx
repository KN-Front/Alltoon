import React from 'react';

const Sidebar = () => {
    return (
        <div className="hidden lg:block w-60 h-[64rem] overflow-auto rounded-lg bg-zinc-700/20 border border-zinc-700/10">
            <div className="p-4">
                <div className="flex flex-col">
                    <div
                        className={`bg-zinc-700/30 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20`}
                    >
                        <p className="text-center">Series</p>
                        <p className="text-center text-sm">3</p>
                    </div>
                </div>
                <div className="mt-3 px-1">
                    <div className="bg-zinc-700/40 w-full h-[1px]"></div>
                </div>
                <div className="flex flex-col mt-1 overflow-auto">
                    <div
                        className={`bg-zinc-700/30 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20`}
                    >
                        <p className="text-center">Comedy</p>
                        <p className="text-center text-sm">2</p>
                    </div>
                    <div
                        className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20`}
                    >
                        <p className="text-center">Action</p>
                        <p className="text-center text-sm">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
