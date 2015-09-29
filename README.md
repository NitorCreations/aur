# Nitor Business Card Augmented Reality Demo #

This repository contains the small augmented reality demo that is linked
to some business cards. The code is hosted at https://aur.nitorio.us/
and some business cards have a QR code with the link with the form
https://aur.nitorio.us/?p=name .

The code is a fork of the marker_ar example from https://github.com/buildar/awe.js .
The initial implementation paints a plane on top of the AUR marker with the
picture matching the 'p' query parameter as the texture.

There is a fallback behavior that just adds the picture as a link on the page
after a timeout for browsers that do not support the functionality (iPhones and
Microsoft phones).

Pushing to this repo triggers a build on https://bob.nitorio.us/jenkins/job/aur-sync/
which syncs the files to the backing S3 bucket and triggers an invalidation of
the CloudFront cache.
