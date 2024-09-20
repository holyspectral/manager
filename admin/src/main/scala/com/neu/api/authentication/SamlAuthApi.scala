package com.neu.api.authentication

import com.neu.api.*
import com.neu.client.RestClient.*
import com.neu.service.{ BaseService, Utils }
import com.neu.service.authentication.AuthService
import com.typesafe.scalalogging.LazyLogging
import org.apache.pekko.http.scaladsl.model.{ RemoteAddress, StatusCodes }
import org.apache.pekko.http.scaladsl.model.headers.HttpCookie
import org.apache.pekko.http.scaladsl.server.{ Directives, Route }

import java.nio.charset.StandardCharsets
import java.util.Base64

//noinspection UnstableApiUsage
class SamlAuthApi(
  authService: AuthService
) extends Directives {

  private val samlSloResp = "samlslo"
  private val saml        = "token_auth_server"
  private val samlslo     = "token_auth_server_slo"
  private val rootPath    = "/"
  private val samlKey     = "samlSso"

  val route: Route =
    (get & path(saml)) {
      extractClientIP { _ =>
        optionalHeaderValueByName("Host") { host =>
          parameter(Symbol("serverName").?) { serverName =>
            Utils.respondWithWebServerHeaders() {
              authService.getResources(None, None, "", host, serverName)
            }
          }
        }
      } ~
      (patch & path(saml)) {
        extractClientIP { _ =>
          Utils.respondWithWebServerHeaders() {
            authService.validateToken(None, None)
          }
        }
      } ~
      (post & path(saml)) {
        extractClientIP { ip =>
          optionalHeaderValueByName("Host") {
            case Some(host) =>
              val text = Base64.getEncoder.encodeToString(samlKey.getBytes(StandardCharsets.UTF_8))

              setCookie(HttpCookie("temp", text)) {
                extractRequestContext { ctx =>
                  authService.login(ip, host, ctx)
                }
              }
            case None       =>
              complete(StatusCodes.BadRequest, "Host header is missing")
          }
        }
      } ~
      (post & path(samlSloResp)) {
        redirect(rootPath, StatusCodes.Found)
      } ~
      (get & path(samlSloResp)) {
        redirect(rootPath, StatusCodes.Found)
      } ~
      headerValueByName("Token") { tokenId =>
        (get & path(samlslo)) {
          extractClientIP { _ =>
            optionalHeaderValueByName("Host") { host =>
              Utils.respondWithWebServerHeaders() {
                authService.logout(host, tokenId)
              }
            }
          }
        }
      }
    }
}
