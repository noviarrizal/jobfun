import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/chakra/theme';
import Layout from '@/components/Layout/Layout';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RecoilRoot>
				<ChakraProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ChakraProvider>
			</RecoilRoot>
		</>
	);
}

const memoize = (fn) => {
	let cache = {};
	return (...args) => {
		let n = args[0];
		if (n in cache) {
			return cache[n];
		} else {
			let result = fn(n);
			cache[n] = result;
			return result;
		}
	};
};

// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize((console) => ({
	...console,
	warn: (...args) =>
		args[0].includes('authModalState') ? null : console.warn(...args),
}));

global.console = mutedConsole(global.console);
