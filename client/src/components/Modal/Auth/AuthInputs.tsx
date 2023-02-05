import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import { authModalState } from './../../../atoms/authModalAtom';

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
	const modalState = useRecoilValue(authModalState);

	return (
		<>
			<Flex direction='column' align='center' width='100%' mt={4}>
				{modalState.view === 'login' && <Login />}
				{/* {modalState.view === 'signUp' && <SignUp />} */}
			</Flex>
		</>
	);
};
export default AuthInputs;
