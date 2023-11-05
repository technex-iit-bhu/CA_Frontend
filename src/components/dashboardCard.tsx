import React, { useState, useRef } from 'react';
import {
  Box,
  Text,
  Card,
  Stack,
  Image,
  Button,
  useMediaQuery,
  Link,
} from '@chakra-ui/react';
interface Props {
  date: string;
  points: string;
  text: string;
  heading: string;
  taskNumber: string;
  month: string;
}
const Cards: React.FC<Props> = ({
  date,
  points,
  text,
  heading,
  taskNumber,
  month,
}) => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const height = isLargerThan700 ? '200px' : '28.5vw';
  const width = isLargerThan700 ? '510px' : '72.8vw';
  const width1 = isLargerThan700 ? '300px' : '42.85vw';
  const br = isLargerThan700 ? '40px' : '5.71vw';
  const height1 = isLargerThan700 ? '120px' : '17.14vw';
  const fontsize1 = isLargerThan700 ? '13px' : '1.85vw';
  const fontsize2 = isLargerThan700 ? '24px' : '3.42vw';
  const padding = isLargerThan700 ? '10px' : '1.42vw';
  const bh = isLargerThan700 ? '25px' : '3.57vw';
  const bw = isLargerThan700 ? '100px' : '14.2vw';
  const image = isLargerThan700 ? '20px' : '3.57vw';

  const [isUploaded, setIsUploaded] = useState(false);
  const [buttonText, setButtonText] = useState('Upload');
  const onFileSelect = (file: File) => {
    console.log('Selected File:', file);
    console.log('Selected File Name:', file.name);
    // Handle the selected file here
    setTimeout(() => {
      setIsUploaded(true);
      setButtonText('Uploaded');
    }, 2000);
  };

  const fileInputRef = useRef<HTMLInputElement>(null!);
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = fileInputRef.current;
    if (fileInput) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        onFileSelect(file);
      }
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            background:
              'linear-gradient(180deg, rgba(100, 100, 100, 0.4) 0%, rgba(100, 100, 100, 0.2) 100%)',
          }}
          w={width}
          h={height}
          borderRadius={br}
          paddingRight={padding}
          marginBottom='2vw'
        >
          <Stack direction='row' h='100%' margin='0' spacing='0'>
            <Box bg='gray' w={height1} h={height1} margin={br}>
              <Image src=''></Image>
            </Box>
            <Box w={width1}>
              <Text marginTop={padding} align='left' fontSize={fontsize1}>
                Month:{month} | Task:{taskNumber}
              </Text>
              <Text align='left' fontWeight='700' fontSize={fontsize2}>
                {heading}
              </Text>
              <Text align='left' fontSize={fontsize1}>
                {text}
              </Text>
              <Box display='flex' justifyContent='space-between'>
                <Text align='left' fontSize={fontsize1}>
                  Expires on: {date}
                </Text>
                <Text align='left' fontSize={fontsize1}>
                  {' '}
                  Points: {points}
                </Text>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Link
                    href='https://www.instagram.com/technexiitbhu/'
                    target='_blank'
                  >
                    <Image
                      src={'/insta.webp'}
                      alt='insta'
                      width={image}
                      height={image}
                      marginRight='0.5vw'
                    />
                  </Link>
                  <Link
                    href='https://www.facebook.com/technexiitbhu/'
                    target='_blank'
                  >
                    <Image
                      src={'/facebook.webp'}
                      alt='facebook'
                      width={bh}
                      height={image}
                      marginRight='0.5vw'
                    />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/company/technex-iit-bhu-varanasi/mycompany/'
                    target='_blank'
                  >
                    <Image
                      src={'/linkedin.webp'}
                      alt='linkedIn'
                      width={image}
                      height={image}
                      marginRight='0.5vw'
                    />
                  </Link>
                  <Link
                    href='https://twitter.com/technexiitbhu?lang=en'
                    target='_blank'
                  >
                    <Image
                      src={'/X.webp'}
                      alt='twitter'
                      width={image}
                      height={image}
                      marginRight='0.5vw'
                    />
                  </Link>
                </Box>
                <Box>
                  <input
                    type='file'
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileSelect}
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    w={bw}
                    h={bh}
                    borderRadius={image}
                    bg={isUploaded ? '#4CAF50' : '#A81F2591'}
                    color='white'
                    fontSize={fontsize1}
                  >
                    {buttonText}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Card>
      </div>
    </>
  );
};
export default Cards;
