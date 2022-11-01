import Head from "next/head";
import Slideshow from "../src/components/Slideshow";
import Testimonial from "../src/components/Testimonial";

import {Container, Box, Heading, Text} from "@chakra-ui/react";

export default function Alumni() {
    return (
        <>
            <Head>
                <title>Limestone Capital</title>
            </Head>
            <Container
                maxW={"80vw"}
                padding="0"
                max-height={"100vh"}
                display={"flex"}
                flexDirection={"column"}
            >
                <Box
                    width={"100%"}
                    padding={"10vh"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <Heading
                        size="3xl"
                        noOfLines={2}
                        fontFamily={"Cormorant Garamond"}
                        color={"#ed7d31"}
                        textAlign={"center"}
                    >
                        Limestone Capital has alumni across the world.
                    </Heading>
                    <Text
                        fontSize="xl"
                        fontFamily={"Cormorant Garamond"}
                        color={"#493c31"}
                        marginTop={"2vw"}
                        textAlign={"center"}
                        fontWeight={"semibold"}
                        maxW={"50vw"}
                    >
                        In ad laborum duis aliqua cupidatat. Irure aliqua Lorem voluptate sint.
                        Adipisicing quis nostrud excepteur amet sint ex et excepteur reprehenderit.
                        Cillum laborum voluptate amet ullamco aliquip cupidatat velit enim deserunt.
                        Magna et do consequat Lorem pariatur non non ex fugiat dolor occaecat
                        fugiat.
                    </Text>
                </Box>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <Slideshow title={"Private Equity & Investing"} />
                    <Slideshow title={"Investment Banking"} />
                    <Slideshow title={"Consulting, Tech, & Other"} />
                </Box>
                <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    height={"25vh"}
                    marginTop={"5vh"}
                    marginLeft={"7vw"}
                    marginRight={"7vw"}
                    marginBottom={"2vh"}
                >
                    <Box
                        marginRight={"1vh"}
                        backgroundColor={"orange"}
                        height={"inherit"}
                        width={"9px"}
                        borderRadius={"20px"}
                        marginTop={"1vh"}
                    ></Box>

                    <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"}>
                        <Text
                            fontSize="2vw"
                            fontFamily={"Cormorant Garamond"}
                            color={"#493c31"}
                            textAlign={"start"}
                            fontWeight={"bold"}
                        >
                            Testimonials
                        </Text>
                        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-between"}>
                            <Testimonial></Testimonial>
                            <Testimonial></Testimonial>
                            <Testimonial></Testimonial>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
