// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const text_theme = flutter_sdk.src__material__text_theme;
  const text_style = flutter_sdk.src__painting__text_style;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const icon_button = flutter_sdk.src__material__icon_button;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const about = flutter_sdk.src__material__about;
  const basic = flutter_sdk.src__widgets__basic;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const input_border = flutter_sdk.src__material__input_border;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const borders = flutter_sdk.src__painting__borders;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const card = flutter_sdk.src__material__card;
  const rounded_rectangle_border = flutter_sdk.src__painting__rounded_rectangle_border;
  const list_tile = flutter_sdk.src__material__list_tile;
  const flex = flutter_sdk.src__rendering__flex;
  const dialog = flutter_sdk.src__material__dialog;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const text_button = flutter_sdk.src__material__text_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const container = flutter_sdk.src__widgets__container;
  const floating_action_button = flutter_sdk.src__material__floating_action_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $add = dartx.add;
  var $_set = dartx._set;
  var $removeAt = dartx.removeAt;
  var $length = dartx.length;
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $toLowerCase = dartx.toLowerCase;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))(),
    BuildContextAndintToStatelessWidget: () => (T.BuildContextAndintToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.ToDoApp = class ToDoApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "To-Do List", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.teal, scaffoldBackgroundColor: colors.Colors.grey._get(100), textTheme: new text_theme.TextTheme.new({bodyText2: new text_style.TextStyle.new({color: colors.Colors.grey._get(800)})})}), home: new main.ToDoScreen.new()});
    }
    static ['_#new#tearOff']() {
      return new main.ToDoApp.new();
    }
  };
  (main.ToDoApp.new = function() {
    main.ToDoApp.__proto__.new.call(this);
    ;
  }).prototype = main.ToDoApp.prototype;
  dart.addTypeTests(main.ToDoApp);
  dart.addTypeCaches(main.ToDoApp);
  dart.setMethodSignature(main.ToDoApp, () => ({
    __proto__: dart.getMethods(main.ToDoApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.ToDoApp, I[0]);
  main.ToDoScreen = class ToDoScreen extends framework.StatefulWidget {
    createState() {
      return new main._ToDoScreenState.new();
    }
    static ['_#new#tearOff']() {
      return new main.ToDoScreen.new();
    }
  };
  (main.ToDoScreen.new = function() {
    main.ToDoScreen.__proto__.new.call(this);
    ;
  }).prototype = main.ToDoScreen.prototype;
  dart.addTypeTests(main.ToDoScreen);
  dart.addTypeCaches(main.ToDoScreen);
  dart.setMethodSignature(main.ToDoScreen, () => ({
    __proto__: dart.getMethods(main.ToDoScreen.__proto__),
    createState: dart.fnType(main._ToDoScreenState, [])
  }));
  dart.setLibraryUri(main.ToDoScreen, I[0]);
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  main._ToDoScreenState = class _ToDoScreenState extends framework.State$(main.ToDoScreen) {
    addTask(task) {
      if (task[$isNotEmpty]) {
        this.setState(dart.fn(() => {
          this.tasks[$add](task);
        }, T.VoidTovoid()));
      }
    }
    updateTask(index, updatedTask) {
      if (updatedTask[$isNotEmpty]) {
        this.setState(dart.fn(() => {
          this.tasks[$_set](index, updatedTask);
        }, T.VoidTovoid()));
      }
    }
    deleteTask(index) {
      this.setState(dart.fn(() => {
        this.tasks[$removeAt](index);
      }, T.VoidTovoid()));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("To-Do List", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), backgroundColor: colors.Colors.teal, elevation: 0, actions: T.JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.info_outline, {color: colors.Colors.white}), onPressed: dart.fn(() => {
                about.showAboutDialog({context: context, applicationName: "To-Do List", applicationVersion: "1.0.0", applicationIcon: new icon.Icon.new(icons.Icons.task, {color: colors.Colors.teal, size: 50}), children: T.JSArrayOfWidget().of([new text.Text.new("A simple and stylish To-Do List app.")])});
              }, T.VoidTovoid())})])}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: C[1] || CT.C1, child: new text_field.TextField.new({onChanged: dart.fn(value => {
                  this.setState(dart.fn(() => {
                    this.searchQuery = value;
                  }, T.VoidTovoid()));
                }, T.StringTovoid()), decoration: new input_decorator.InputDecoration.new({labelText: "Search", prefixIcon: new icon.Icon.new(icons.Icons.search, {color: colors.Colors.teal}), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), focusedBorder: new input_border.OutlineInputBorder.new({borderSide: new borders.BorderSide.new({color: colors.Colors.teal})})})})}), new basic.Expanded.new({child: new scroll_view.ListView.builder({itemCount: this.tasks[$length], itemBuilder: dart.fn((context, index) => {
                  if (this.searchQuery[$isEmpty] || this.tasks[$_get](index)[$toLowerCase]()[$contains](this.searchQuery[$toLowerCase]())) {
                    return new card.Card.new({color: colors.Colors.white, shadowColor: colors.Colors.teal, elevation: 4, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)}), child: new list_tile.ListTile.new({title: new text.Text.new(this.tasks[$_get](index), {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500})}), trailing: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit, {color: colors.Colors.blueAccent}), onPressed: dart.fn(() => {
                                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => {
                                    let controller = new editable_text.TextEditingController.new({text: this.tasks[$_get](index)});
                                    return new dialog.AlertDialog.new({title: new text.Text.new("Edit Task"), content: new text_field.TextField.new({controller: controller, decoration: new input_decorator.InputDecoration.new({labelText: "Task", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)})})}), actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.fn(() => {
                                            navigator.Navigator.of(context).pop(T.ObjectN());
                                          }, T.VoidTovoid()), child: new text.Text.new("Cancel", {style: new text_style.TextStyle.new({color: colors.Colors.red})})}), new text_button.TextButton.new({onPressed: dart.fn(() => {
                                            this.updateTask(index, controller.text);
                                            navigator.Navigator.of(context).pop(T.ObjectN());
                                          }, T.VoidTovoid()), child: new text.Text.new("Save", {style: new text_style.TextStyle.new({color: colors.Colors.teal})})})])});
                                  }, T.BuildContextToAlertDialog())});
                              }, T.VoidTovoid())}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.delete, {color: colors.Colors.redAccent}), onPressed: dart.fn(() => {
                                this.deleteTask(index);
                              }, T.VoidTovoid())})])})})});
                  } else {
                    return new container.Container.new();
                  }
                }, T.BuildContextAndintToStatelessWidget())})})])}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => {
                let controller = new editable_text.TextEditingController.new();
                return new dialog.AlertDialog.new({title: new text.Text.new("Add Task"), content: new text_field.TextField.new({controller: controller, decoration: new input_decorator.InputDecoration.new({labelText: "Task", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)})})}), actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.fn(() => {
                        navigator.Navigator.of(context).pop(T.ObjectN());
                      }, T.VoidTovoid()), child: new text.Text.new("Cancel", {style: new text_style.TextStyle.new({color: colors.Colors.red})})}), new text_button.TextButton.new({onPressed: dart.fn(() => {
                        this.addTask(controller.text);
                        navigator.Navigator.of(context).pop(T.ObjectN());
                      }, T.VoidTovoid()), child: new text.Text.new("Add", {style: new text_style.TextStyle.new({color: colors.Colors.teal})})})])});
              }, T.BuildContextToAlertDialog())});
          }, T.VoidTovoid()), backgroundColor: colors.Colors.teal, child: new icon.Icon.new(icons.Icons.add, {color: colors.Colors.white})})});
    }
    static ['_#new#tearOff']() {
      return new main._ToDoScreenState.new();
    }
  };
  (main._ToDoScreenState.new = function() {
    this.tasks = T.JSArrayOfString().of([]);
    this.searchQuery = "";
    main._ToDoScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._ToDoScreenState.prototype;
  dart.addTypeTests(main._ToDoScreenState);
  dart.addTypeCaches(main._ToDoScreenState);
  dart.setMethodSignature(main._ToDoScreenState, () => ({
    __proto__: dart.getMethods(main._ToDoScreenState.__proto__),
    addTask: dart.fnType(dart.void, [core.String]),
    updateTask: dart.fnType(dart.void, [core.int, core.String]),
    deleteTask: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._ToDoScreenState, I[0]);
  dart.setFieldSignature(main._ToDoScreenState, () => ({
    __proto__: dart.getFields(main._ToDoScreenState.__proto__),
    tasks: dart.fieldType(core.List$(core.String)),
    searchQuery: dart.fieldType(core.String)
  }));
  main.main = function main$0() {
    binding.runApp(new main.ToDoApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map