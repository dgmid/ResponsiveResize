//
//  AppDelegate.h
//  Responsive Resize
//
//  Created by Duncan Midwinter on 6/2/13.
//  Copyright (c) 2013 Midwinter Duncan Grant. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <Webkit/Webkit.h>
#import <WebKit/WebPreferences.h>

@interface WebPreferences (WebPreferencesPrivate)
- (void)_setLocalStorageDatabasePath:(NSString *)path;
- (void) setLocalStorageEnabled: (BOOL) localStorageEnabled;
@end

@interface AppDelegate : NSObject <NSApplicationDelegate>  {
    
    NSUserDefaults *appPrefs;
    
    NSHTTPCookieStorage *cookieStorage;
    
    WebView *ResponsiveResize;
    
}

-(void) refreshWebView:(NSString *)uaString;


@property (assign) IBOutlet NSWindow *window;
@property (retain, nonatomic) IBOutlet WebView *ResponsiveResize;

- (IBAction)openPreferences:(id)sender;
- (IBAction)resetApplication:(id)sender;
- (IBAction)openDevices:(id)sender;
- (IBAction)rotateDevice:(id)sender;
- (IBAction)customWidth:(id)sender;
- (IBAction)customHeight:(id)sender;
- (IBAction)increaseViewport:(id)sender;
- (IBAction)decreaseViewport:(id)sender;
- (IBAction)toggleTheme:(id)sender;
- (IBAction)clearCache:(id)sender;
- (IBAction)deleteCookies:(id)sender;
- (IBAction)openResponsiveResizeSite:(id)sender;
- (IBAction)suggestDevice:(id)sender;

@end