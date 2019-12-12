/*!
 * Copyright 2019 Andrea Giammarchi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (re) {
  // when the URL matches
  if (re.test(location.href))
    // redirect the browser to its /webrtc counterpart
    location.href = RegExp.$1 + RegExp.$2 + '/webrtc' + RegExp.$3;
}(
  // matches bluejeans URLs that don't contain /webrtc already
  /^(https?:\/\/(?:.*\.)?bluejeans\.com\/)(\d+)([?#][\S\s]*)?$/
));
