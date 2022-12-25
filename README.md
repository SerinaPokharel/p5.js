# Circle Animation

This code creates an animation with a small circle that follows the movement of the mouse cursor on the canvas.

We start by defining three variables: x and y represent the coordinates of the circle and easing is a value that determines how quickly the circle moves towards the mouse cursor.

Then, we set up the canvas by creating a rectangle with a width of 720 pixels and a height of 400 pixels. We also disable the outline of shapes that are drawn on the canvas.

The program then calls the draw() function repeatedly, at a rate determined by the frame rate. Each time it is called, the function clears the canvas by filling it with a shade of pink. It then sets the target position of the circle to the current position of the mouse cursor.

Next, the function calculates the difference between the target position and the current position of the circle, both in the x and y directions. It updates the position of the circle by adding a fraction of these differences to its current position, with the fraction determined by the easing value.

Finally, the function draws a small circle (with a diameter of 10 pixels) at the current position of the circle.
