import { cn } from "~/utils/cn";
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };

function ServerCardSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6 lg:p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300 hover:transform hover:scale-[1.01] flex flex-col lg:flex-row items-start lg:items-center justify-between w-full", className)} {...props}>
            {/* Server Info (Icon, Title, Version, IP) */}
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-4 mb-4 lg:mb-0 w-full lg:w-auto flex-row">
                <div className="w-[72px] h-[72px] rounded-md flex-shrink-0 bg-neutral-700/50 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 bg-neutral-600/50 rounded animate-pulse"></div>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="h-8 w-40 mb-2 bg-neutral-700/50 rounded animate-pulse flex items-center">
                        <span className="text-transparent animate-pulse">Loading Server Name...</span>
                    </div>
                    <div className="h-7 w-32 mb-1 bg-neutral-700/50 rounded animate-pulse flex items-center">
                        <span className="text-transparent animate-pulse text-sm">Version: Loading...</span>
                    </div>
                    <div className="h-5 w-32 bg-neutral-700/50 rounded animate-pulse flex items-center">
                        <span className="text-transparent animate-pulse text-sm">IP: Loading...</span>
                    </div>
                </div>
            </div>

            {/* Status and Download actions */}
            <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                <div className="px-4 py-2 text-sm lg:text-xs font-semibold rounded-full text-center mb-3 w-full lg:w-auto h-8 bg-neutral-700/50 animate-pulse flex items-center justify-center">
                    <span className="text-transparent animate-pulse">Loading Status...</span>
                </div>
                <div className="w-full lg:w-auto h-10 rounded-xl bg-neutral-700/50 animate-pulse flex items-center justify-center px-4">
                    <span className="text-transparent animate-pulse">Download</span>
                </div>
            </div>
        </div>
    );
}

export { ServerCardSkeleton }; 
