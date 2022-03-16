import './idle-callback-polyfill';
import React from 'react';
import * as mdx from '@mdx-js/react';
import { MDXRemoteSerializeResult } from './types';
declare type RequestIdleCallbackHandle = number;
declare type RequestIdleCallbackOptions = {
    timeout?: number;
};
declare type RequestIdleCallbackDeadline = {
    readonly didTimeout: boolean;
    timeRemaining: () => number;
};
declare global {
    interface Window {
        requestIdleCallback: (callback: (deadline: RequestIdleCallbackDeadline) => void, opts?: RequestIdleCallbackOptions) => RequestIdleCallbackHandle;
        cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
    }
}
export declare type MDXRemoteProps = MDXRemoteSerializeResult & {
    /**
     * A object mapping names to React components.
     * The key used will be the name accessible to MDX.
     *
     * For example: `{ ComponentName: Component }` will be accessible in the MDX as `<ComponentName/>`.
     */
    components?: React.ComponentProps<typeof mdx.MDXProvider>['components'];
    /**
     * Determines whether or not the content should be hydrated asynchronously, or "lazily"
     */
    lazy?: boolean;
};
export { MDXRemoteSerializeResult };
/**
 * Renders compiled source from next-mdx-remote/serialize.
 */
export declare function MDXRemote({ compiledSource, frontmatter, scope, components, lazy, }: MDXRemoteProps): JSX.Element;