import { Container, VStack, Heading, Text, Box, HStack, IconButton, Link, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3NDU3NzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mb={4} />
          <Heading as="h1" size="xl">
            Juan Pérez
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in JavaScript, React, Node.js, and have a strong background in both front-end and back-end development. I love solving complex problems and am always eager to learn new technologies.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Skills
          </Heading>
          <VStack align="start">
            <Text>JavaScript</Text>
            <Text>React</Text>
            <Text>Node.js</Text>
            <Text>HTML & CSS</Text>
            <Text>SQL & NoSQL Databases</Text>
            <Text>RESTful APIs</Text>
            <Text>Git & GitHub</Text>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Experience
          </Heading>
          <VStack align="start">
            <Box>
              <Heading as="h3" size="md">
                Senior Full Stack Developer
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Tech Solutions Inc. | Jan 2020 - Present
              </Text>
              <Text fontSize="md">Leading a team of developers to build scalable web applications. Responsible for designing architecture, coding, and deploying applications.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">
                Full Stack Developer
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Web Innovators | Jun 2017 - Dec 2019
              </Text>
              <Text fontSize="md">Developed and maintained web applications using React and Node.js. Collaborated with designers and product managers to deliver high-quality products.</Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Education
          </Heading>
          <VStack align="start">
            <Box>
              <Heading as="h3" size="md">
                Bachelor of Science in Computer Science
              </Heading>
              <Text fontSize="sm" color="gray.600">
                University of Technology | 2013 - 2017
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Contact Me
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://www.linkedin.com/in/juanperez" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://github.com/juanperez" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="mailto:juanperez@example.com">
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
