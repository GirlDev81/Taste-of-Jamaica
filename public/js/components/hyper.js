webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  reviewRightClicked: reviewRightClicked,
  intro: intro,
  showMenu: showMenu
};

function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview + 1
    }
  };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(19);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Menu = __webpack_require__(17);

var _Menu2 = _interopRequireDefault(_Menu);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _FoodQuote = __webpack_require__(14);

var _FoodQuote2 = _interopRequireDefault(_FoodQuote);

var _Footer = __webpack_require__(15);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Menu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_FoodQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var companyInfo = {
  title: 'The Taste of Jamaica',
  phone: '020-8599-9292',
  Location: 'Romford, Essex'

};

var reviewsData = [{
  review: 'Great food, lovely staff and all made with love. I can\'t stop coming back for more!'
}, {
  review: 'This is the best caribbean food I\'ve had in a very long time, with a truely authentic flavour.'
}, {
  review: 'The jerk chicken was cooked to perfection, succulently tender meat with a spicy, crispy skin. Simply delicious!'
}, {
  review: 'I come here for lunch almost everyday, it\'s so good!'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  reviewsData: reviewsData,
  reviewStatus: {
    currentReview: 2
  }

};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "menu-header" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "info" },
              (0, _hyperapp.h)(
                "h3",
                null,
                "Location:"
              ),
              (0, _hyperapp.h)("br", null),
              "101 Stanton Road",
              (0, _hyperapp.h)("br", null),
              "Chadwell Heath",
              (0, _hyperapp.h)("br", null),
              "Essex",
              (0, _hyperapp.h)("br", null),
              "RM8 2PU"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "tel-email" },
              (0, _hyperapp.h)(
                "span",
                { "class": "smTel" },
                "Tel: "
              ),
              " 0208 500 9000"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "info" },
              (0, _hyperapp.h)(
                "h3",
                null,
                "Opening Hours:"
              ),
              (0, _hyperapp.h)("br", null),
              "Monday-Saturday 10am-10pm"
            ),
            (0, _hyperapp.h)("hr", null),
            (0, _hyperapp.h)(
              "div",
              { "class": "catering" },
              "We Also Provide Catering For Large Functions"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "tel-email" },
              "Email us at:",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@tasteofjamaica.co.uk" },
                " info@tasteofjamaica.com"
              )
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FoodQuote;

var _hyperapp = __webpack_require__(0);

function FoodQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'FoodQuote', style: {
        backgroundImage: 'url("https://c1.staticflickr.com/1/56/114683197_21993f3215_b.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'p',
        null,
        'Once you taste real caribbean food, you experience a little piece of paradise'
      )
    ),
    (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(
        'ul',
        { 'class': 'social-media' },
        (0, _hyperapp.h)(
          'li',
          null,
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.facebook.com' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-facebook-official', 'aria-hidden': 'true' })
          ),
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.instagram.com' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-instagram', 'aria-hidden': 'true' })
          ),
          (0, _hyperapp.h)(
            'a',
            { href: 'http://www.twitter.com' },
            (0, _hyperapp.h)('i', { 'class': 'fa fa-twitter-square', 'aria-hidden': 'true' })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "The Taste of Jamaica \xA9 Site produced by CoCreators"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#TopImg" },
          "Home"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Menu" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#Reviews" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#ContactUs" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _hyperapp = __webpack_require__(0);

function Menu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      console.log(item.title);

      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            item.description
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "price" },
            item.price
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Menu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "menuHead" },
        (0, _hyperapp.h)(
          "div",
          { "class": "menu-header" },
          "MENU"
        )
      ),
      (0, _hyperapp.h)("hr", null),
      (0, _hyperapp.h)(
        "div",
        { "class": "mainsMen" },
        (0, _hyperapp.h)(
          "div",
          { "class": "foodCats" },
          "MAINS"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "servings" },
          "All Meals Served With Rice & Peas, Plain Rice or Hard Food "
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "table",
            null,
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Fish"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA34"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Soup of the Day"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA33 / \xA35"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Fried Chicken"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Curry Goat"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Stew Peas"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Jerk Chicken"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "BBQ Chicken"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Stew Chicken"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Baked Chicken"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Ackee & SaltFish"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36 / \xA37"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Oxtail"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA36.50 / \xA37.50"
              )
            ),
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Fried Fish Dinner"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA38"
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "freeDel" },
            (0, _hyperapp.h)(
              "h2",
              null,
              "Free home delivery",
              (0, _hyperapp.h)("br", null),
              "for orders over \xA312 ",
              (0, _hyperapp.h)("br", null),
              "(within 3 miles)"
            )
          )
        )
      ),
      (0, _hyperapp.h)("hr", null),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "sides" },
            (0, _hyperapp.h)(
              "div",
              { "class": "foodCats" },
              "SIDES"
            ),
            (0, _hyperapp.h)(
              "table",
              null,
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Patty"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA31.50"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Macaroni Cheese"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA33.00"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Fried Dumpling"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA30.70"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "1 Portion of Plantain"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA31.00"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Porridge"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA33.00"
                )
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "div",
            { "class": "drinks" },
            (0, _hyperapp.h)(
              "div",
              { "class": "foodCats" },
              "DRINKS"
            ),
            (0, _hyperapp.h)(
              "table",
              null,
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Guinness Punch"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA33.00"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Tropical Drink"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA31.50"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Fruit Punch"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA33.00"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Carrot Juice"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA32.50"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "Mineral Water"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA30.70"
                )
              ),
              (0, _hyperapp.h)(
                "tr",
                null,
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "D&G Can Drink"
                ),
                (0, _hyperapp.h)(
                  "td",
                  null,
                  "\xA30.70"
                )
              )
            )
          )
        ),
        (0, _hyperapp.h)("hr", null),
        (0, _hyperapp.h)(
          "div",
          { "class": "foodCats" },
          "LUNCH TIME MEAL DEAL"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "servings" },
          "From 11:30am - 3pm"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "deal" },
          (0, _hyperapp.h)(
            "table",
            null,
            (0, _hyperapp.h)(
              "tr",
              null,
              (0, _hyperapp.h)(
                "td",
                null,
                "Any main or kids meal from the Menu* with any can drink"
              ),
              (0, _hyperapp.h)(
                "td",
                null,
                "\xA33.00 / \xA35.50"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "servings" },
            "*Fish Meal not included"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  //<p>You're the ackee<br/>in my saltfish,<br/>Condensed milk in my tea,<br/>The patty in my coco bread,<br/>without you there's no me.</p>
  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h2",
            null,
            "reviews"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            state.globalState.reviewsData[state.globalState.reviewStatus.currentReview].review
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-image" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "welcome-info" },
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "Caribbean Restaurant & Takeaway"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[20]);