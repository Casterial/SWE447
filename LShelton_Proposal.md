# **Final Project Proposal**
My project will be based around Quaternions as I’ve recently taken a liking to the mathematics to them and the usefulness with them in my major. After my original project which was to take my Quaternion library I’ve previously wrote to visually show the quaternions rotating in OpenGL. However, after recent rethinking of this project I decided to base the project on the same thing, but with a different way of doing the project.

## **Objective:**
After the comments and regards toward my project and further research I will be using a virtual trackball using quaternions and rotating an object using this. 

## **Sequence of Action:**
* Week 1: Implement the OpenGL library into visual studios and research further on how to tackle the program.

* Week 2: Look up different types of sphere models which make a great choice for a virtual trackball because it makes a good enclosure for mostly any object. The surface is smooth and continuous, which is important in the generation of smooth rotations in response to smooth mouse movements.

* Week 3: Add bounding boxes within the scene so objects will be restricted within a confined space. Continue to research the quaternion trackballs and work toward implementation of allowing the trackball interface to all clicking and dragging within the viewport and rotation among the entire quaternion axis.

* Week 4: Add in a cube which will take in the virtual trackball and allow the object (cube) to be rotated and replace the week 3 rotation to apply toward the object(cube) implemented.

* Week 5: (Stretch goal) Add an axis to show it visually rotating among the axis within the window.

## **Implmentation:**
I intend to implement this program using OpenGL library with C++ to allow me to expand my knowledge of C++ and continue to work within a more comfortable language.

## **Objects in Scene:**
* 3 cubes for borders to make a confined space
* Arcball sphere model found online, or self-created.
* Rotating object cube
