# Nitor Business Card Augmented Reality Demo #

This repository contains the small augmented reality demo that is linked
to some business cards. The code is hosted at https://aur.nitorio.us/
and some business cards have a QR code with the link with the form
https://aur.nitorio.us/?p=name#unique-hash .

The demo in action: https://www.youtube.com/watch?v=KbiZRK0hUfk

The code is a fork of the marker_ar example from https://github.com/buildar/awe.js .
The initial implementation paints a plane on top of the AUR marker with the
picture matching the 'p' query parameter as the texture.

There is a fallback behavior that just adds the picture as a link on the page
after a timeout for browsers that do not support the functionality (iPhones and
Microsoft phones).

Pushing to this repo triggers a build on https://bob.nitorio.us/jenkins/job/aur-sync/
which syncs the files to the backing S3 bucket and triggers an invalidation of
the CloudFront cache.

## Add your own picture ##

If you are a Nitorean, you can add your own picture to your business card if you like:

1. Create a jpg image / 3D mesh you'd wish to display on top of the AUR marker (square) and configure your persona in [persons.json](https://github.com/NitorCreations/aur/blob/master/persons.json); commit both to this repository.
1. Create a QR code with the link as above https://aur.nitorio.us/?p=name#unique-hash
    * One option for this is to use this QR code generator http://research.swtch.com/qr/draw
    with for example [this image](nitor-bw.png)
    * It works nicely if you scale and position the image to match the size of
    the code and select "Data Pixels Only"
    * This works so that the url ends up being https://aur.nitorio.us/?p=name#[really long string of digits to make the image what you want]
    * However you generate your QR, the url needs to have a hard-to-guess hash part
1. Create and commit a file: [50 first characters from your QR url hash].txt with your full name in it (examples in the repo)
1. Print the QR code and the AUR marker for example on the back of your business
card like below
1. Add links to your LinkedIn and/or twitter handle into [persons.json](persons.json)
and commit that.
1. Push and you're done :)


![Business card back](business-card-back.png)
