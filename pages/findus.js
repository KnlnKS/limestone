import Head from "next/head";
import Slideshow from "../src/components/Slideshow";
import Testimonial from "../src/components/Testimonial";
import Favicon from "../public/favicon.png";

import {
    Container,
    Box,
    Heading,
    Text,
    Image,
    List,
    ListItem,
    ListIcon,
    OrderedList,
} from "@chakra-ui/react";

export default function Findus() {
    return (
        <>
            <Head>
                <title>Limestone Capital</title>
            </Head>
            <Container
                maxW={"100vw"}
                minHeight={"100vh"}
                height={"auto"}
                display={"flex"}
                flexDirection={"column"}
                backgroundColor={"#EAE0C7"}
            >
                <Box
                    width={"100%"}
                    maxHeight={"60vw"}
                    padding={"10vh"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                >
                    <Box
                        width={"50%"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                    >
                        <Heading
                            size="3xl"
                            noOfLines={2}
                            fontFamily={"Cormorant Garamond"}
                            color={"#493c31"}
                            textAlign={"start"}
                        >
                            How to Apply
                            <Box
                                marginTop={"0.8vh"}
                                width={"full"}
                                height={"4px"}
                                backgroundColor={"orange"}
                            ></Box>
                            <Box
                                width={"full"}
                                height={"4px"}
                                backgroundColor={"#DA7F08"}
                                marginBottom={"1.8vh"}
                            ></Box>
                        </Heading>
                        <Text fontSize="2xl" fontWeight={"600"}>
                            Limestone Capital is looking for Queens' hardest-working commerce
                            students with a passion for finance. Applicants should be:
                        </Text>
                        <OrderedList spacing={3}>
                            <ListItem>
                                <ListIcon color="green.500" />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            </ListItem>
                            <ListItem>
                                <ListIcon color="green.500" />
                                Assumenda, quia temporibus eveniet a libero incidunt suscipit
                            </ListItem>
                            <ListItem>
                                <ListIcon color="green.500" />
                                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                            </ListItem>
                        </OrderedList>
                        <Text marginTop={"2vh"} fontSize="2xl" fontWeight={"600"}>
                            Limestone will be hiring for all Investment Team positions in March
                            2022.
                        </Text>
                    </Box>
                    <Image src="limestone_logo_2.png" alt="Image" height={"250px"}></Image>
                </Box>
                {/* NEW SECTION FORMAT LATER */}
                <Box
                    width={"100%"}
                    maxHeight={"60vw"}
                    padding={"10vh"}
                    paddingTop={"0vh"}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                >
                    <Box
                        width={"50%"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                    >
                        <Heading
                            size="3xl"
                            noOfLines={2}
                            fontFamily={"Cormorant Garamond"}
                            color={"#493c31"}
                            textAlign={"start"}
                        >
                            Where to Find Us
                            <Box
                                marginTop={"0.4vh"}
                                width={"full"}
                                height={"4px"}
                                backgroundColor={"orange"}
                            ></Box>
                            <Box
                                width={"full"}
                                height={"4px"}
                                backgroundColor={"#DA7F08"}
                                marginBottom={"1.8vh"}
                            ></Box>
                        </Heading>
                        <Text fontSize="2xl" fontWeight={"600"}>
                            Our social media pages have all of Limestone's relevant info. Find them
                            at:
                        </Text>
                        <Box
                            height={"20vh"}
                            width={"full"}
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"start"}
                            marginTop={"1.5vh"}
                        >
                            <Image
                                src="linkedin.png"
                                alt="Image"
                                height={"50px"}
                                marginRight={"2.5vw"}
                            ></Image>
                            <Image
                                src="facebook.png"
                                alt="Image"
                                height={"50px"}
                                marginRight={"2.5vw"}
                            ></Image>
                            <Image
                                src="instagram.png"
                                alt="Image"
                                height={"50px"}
                                marginRight={"2.5vw"}
                            ></Image>
                        </Box>
                    </Box>
                    <Image src="limestone_logo_2.png" alt="Image" height={"250px"}></Image>
                </Box>
            </Container>
        </>
    );
}
