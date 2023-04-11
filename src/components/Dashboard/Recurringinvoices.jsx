import {
  Box,
  Grid,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import {RiSearch2Line } from 'react-icons/ri';
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import logo from './Profile.png';

// Component for databox
const Databox = ({ title, qty }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} mb={4} />
    <HStack mx={'20'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  // temp data
  const clients = [
    {
      name: 'Temp Name',
      send: '25',
      enddate: '24-07-2023',
      interval: '3/month',
      amount: 40000,
    },

    {
      name: 'Temp Name',
      send: '25',
      enddate: '24-07-2023',
      interval: '3/month',
      amount: 40000,
    },

    {
      name: 'Temp Name',
      send: '25',
      enddate: '24-07-2023',
      interval: '3/month',
      amount: 40000,
    },

    {
      name: 'Temp Name',
      send: '25',
      enddate: '24-07-2023',
      interval: '3/month',
      amount: 40000,
    },

    {
      name: 'Temp Name',
      send: '25',
      enddate: '24-07-2023',
      interval: '3/month',
      amount: 40000,
    },
  ];

  // search client function
  const searchClient = clientname => {
    console.log(clientname);
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1fr 5fr']}>
      <Sidebar />
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Stack
          direction={['column', 'row']}
          justifyContent={['flex-start', 'flex-start']}
          mb="16"
          boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
          borderRadius={'lg'}
          ml={['0', '16']}
          mr={['0', '16']}
        >
          <Box
            display={'flex'}
            flexdirection={['column', 'row']}
            justifyContent={'space-evenly'}
            p={['2', '0']}
            mb={['5', '0']}
          >
            <Box
              p={'4'}
              boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
              borderRadius={'lg'}
              m={['0', '5']}
              bgColor={'green.500'}
            >
              <Text children="PAID" />
              <Text fontSize={'xl'} fontWeight={'bold'} children={'24.000'} />
            </Box>

            <Box
              p={'4'}
              boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
              borderRadius={'lg'}
              m={['0', '5']}
              bgColor={'gray.500'}
            >
              <Text children="PENDING" />
              <Text fontSize={'xl'} fontWeight={'bold'} children={'24.000'} />
            </Box>

            <Box
              p={'4'}
              boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
              borderRadius={'lg'}
              m={['0', '5']}
              bgColor={'red.500'}
            >
              <Text children="UNPAID" />
              <Text fontSize={'xl'} fontWeight={'bold'} children={'24.000'} />
            </Box>
          </Box>

          <Box>
            <Box
              p={'4'}
              boxShadow={'0px 0 10px rgba(107,70,193,0.5)'}
              borderRadius={'lg'}
              m={['0', '5']}
              ml={['0', '400']}
            >
              <HStack>
                <Avatar src={logo} size={'lg'} />
                <Text
                  fontSize={'xl'}
                  fontWeight={'bold'}
                  children={'Your Name'}
                />
              </HStack>
            </Box>
          </Box>
        </Stack>

        <Stack
          direction={['column', 'row']}
          justifyContent={['flex-start', 'flex-start']}
          mb="16"
        >
          <Heading
            children="Recurring Invoices"
            ml={['0', '16']}
            mb={['8', '0']}
          />
          <Link to={'#'}>
            <Button ml={['0', '500']} colorScheme="purple" maxWidth={'100vw'}>
              Add recurring invoice +
            </Button>
          </Link>
        </Stack>

        <Stack
          direction={['column', 'row']}
          minH="24"
          justifyContent={'space-evenly'}
        >
          <Databox title="#RECURRING INVOICES" qty={20} />
          <Databox title="RECURRING REVENUE" qty={20} />
          <Databox title="RECURRING OVERDUE" qty={20} />
        </Stack>

        <Box padding={['0', '16']} overflowX={'auto'}>
          <Heading
            children="Per Client"
            my={'10'}
            textAlign={['center', 'left']}
          />
          <HStack py={4}>
            <Input
              focusBorderColor="purple.500"
              maxWidth={'200'}
              placeholder="Search Client"
            />
            <Button onClick={searchClient()} colorScheme="purple">
              Search
              <RiSearch2Line />
            </Button>
          </HStack>
          <TableContainer w={['90vw', 'full']}>
            <Table variant={'simple'} size={'lg'}>
              <Thead>
                <Tr>
                  <Th>CLIENT</Th>
                  <Th>SEND</Th>
                  <Th>END-DATE</Th>
                  <Th>INTERVAL</Th>
                  <Th>AMOUNT</Th>
                  <Th isNumeric>EDIT</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clients.map((item, index) => (
                  <Row key={index} item={item} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Grid>
  );
};

export default Dashboard;

// table component
function Row({ item }) {
  return (
    <Tr>
      <Td>#{item.name}</Td>
      <Td>{item.send}</Td>
      <Td>{item.enddate}</Td>
      <Td>{item.interval}</Td>
      <Td>{item.amount}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Menu>
            <MenuButton
              colorScheme="purple"
              as={Button}
              rightIcon={<ChevronRightIcon/>}
            >
              Edit
            </MenuButton>
            <MenuList>
              <MenuItem>Pause</MenuItem>
              <MenuItem>Duplicate</MenuItem>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Terminate</MenuItem>
              <MenuItem>Skip next date</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Td>
    </Tr>
  );
}
