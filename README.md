## Vision Statement
TurtMap uses a single TurtleBot *UGV* to trace the geography of a location and display the map to users. The requests originate from a web application that allows users to begin the process of mapping the *UGV*’s environment. The incoming request is then handled by a paired *UGV* and the application informs the user that the *UGV* is busy mapping. When the *UGV* is finished tracing the map, it sends the *SLAM* map to the mobile application, where it is then displayed to the user. Usage examples include military personnel having more detailed insights on an environment before entering.

## Use Cases for TurtMap

### Main Use Case
| Use Case      | Description      |
| ------------- |-------------     |
| UC1           | Autonomous Mapping of Environment |

### Supporting Use Cases
| Use Case      | Description      |
| ------------- |-------------     |
| SC1           | Activate TurtleBot Remotely |
| SC2           | Collect and Publish Mapping  |
| SC3           | End Mission  |

### General Exception Cases
| Use Case      | Description      |
| ------------- |-------------     |
| EC1           | Loss of Signal |
| EC2           | Low Battery  |

## Potential Risks
1. Getting Website to be able to remotely interact with and activate a TurtleBot
2. Receiving output and mapping back from TurtleBot and projecting that response back onto the website
3. Getting Error responses that result from either a loss of connection or a low battery warning from the TurtleBot and display to the website

